var chart = new cryptowatch.Embed('bitmex', 'btcusd-perpetual-futures', {
	timePeriod: '1d',
  width: 650,
  presetColorScheme: 'delek'
});
chart.mount('#chart-container');