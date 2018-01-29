import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';  // 引入直接當作一個component使用

// 匯入多個在該module裡面的變數
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null // react-dates需要的
  };
  
  // 設定過濾起始日期
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  // react-dates需要的
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  render() {
    return (
      <div>
        {/* 文字搜尋條件輸入匡 */}
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => {
            this.props.dispatch(setTextFilter(e.target.value)); {/* 設定redux/store/state上的文字搜尋條件 */}
          }}
        />

        {/* 排序方式設定 */}
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => {
            {/* 設定redux/store/state上的排序條件是日期還是金額 */}
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate()); 
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        
        {/* 日期條件設定 */}
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true} 
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
};

// 把Redux中的State接上props
const mapStateToProps = (state) => {
  return {
    filters: state.filters // 這裡面的東西會被這個component當作props來使用
  };
};

export default connect(mapStateToProps)(ExpenseListFilters); // 使用connect來讓這個componet接上redux
