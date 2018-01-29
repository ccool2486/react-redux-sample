// 這邊放跟Filter相關的action generators
// 這些action以後會丟到reducer操作資料

// 設定文字搜尋字串
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// 設定為「以日期排序」
export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

// 設定為「以金額排序」
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

// 設定「排序開始日期」
export const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

// 設定「排序結束日期」
export const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});
