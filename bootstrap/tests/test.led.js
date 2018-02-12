
	/**
 * Copyright 2016 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const rl = require('readline-sync');
const sleep = require('sleep');

const TJBot = require('tjbot');

var tj = new TJBot(['led'], {log: {level: 'debug'}}, {});
var colors = ['red', 'green', 'blue', 'orange', 'off'];
	colors = tj.shineColors();
// console.log(tj.shineColors());

var _len = colors.length;
var _cur = 0;
console.log('there are '+_len+' colors in this array.');

colors.forEach(function(color) {
   _cur++;
    console.log('Processing '+_cur+' of '+_len+' : '+color);
    tj.shine(color);
//    tj.pulse(color,0.5)
    sleep.msleep(10);
//    var answer = rl.question('Did the LED turn ' + color + '? Y/N > ');
//    if (answer.toLowerCase() != 'y') {
//        throw new Error('expected the LED to turn ' + color + ', please check your LED wiring.');
//    }
});
tj.shine('blue');
