function navigatePage() {
  // 年とラウンドのドロップダウン要素を取得
  const yearSelect = document.getElementById('year-select');
  const roundSelect = document.getElementById('round-select');
  const classSelect = document.getElementById('class-select');
  
  // 選択された値を取得
  const selectedYear = yearSelect.value;
  const selectedRound = roundSelect.value;
  const selectedClass = classSelect.value;
  
  // URLを作成してページを遷移
  window.location.href = `/result/${selectedYear}/${selectedRound}/${selectedClass}_race.html`;
}