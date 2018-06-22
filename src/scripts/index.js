import TeleportAutoComplete from 'teleport-autocomplete';
import GetWeatherDataForCity from './lib/weatherManager';
import initMobileController from './lib/mobileController';
import getWeatherDataForCity from './lib/weatherManager';

document.addEventListener('DOMContentLoaded', () => {
    const weatherInput = new TeleportAutoComplete({
        el:'#input-city',
        maxItems: 7,
    });
    weatherInput.on('change', getWeatherDataForCity);
    initMobileController('left', 'right');
});


// weatherInput.on('change', (res) => {
//     debugger;
//     getWeatherDataForCity(res);
// });