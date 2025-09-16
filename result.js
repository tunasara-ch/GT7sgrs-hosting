function navigatePage(Year = '2025', Round = '', Class = 'GT500') {

  if (Round === '') {
    switch (Year) {
      case '2025':
        Round = 'Rd5';
        break;
      case '2024':
        Round = 'Rd8';
        break;
      case '2023':
        Round = 'Rd9';
        break;
    }
  }
  // URLを作成してページを遷移
  window.location.href = `/result/${Year}/${Round}/${Class}_race.html`;
}