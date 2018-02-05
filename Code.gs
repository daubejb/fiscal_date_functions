/**
MIT License

Copyright (c) 2018 jeff daube aka daubedesign

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/

//=========================================================================== fiscal functions

/**
 * Returns the input date's 4-digit fiscal year.
 *
 * @param {date} input The date to convert.
 * @param {3} monthStart The start month of your fiscal year. 
 * @return The input's 4-digit fiscal year.
 * @customfunction
 */
function FISCALYEAR(input, monthStart) {
  if (isDate(input)) {
    if (monthStart > 12 || monthStart < 1) {
      throw new Error ('The monthStart must be between 1 and 12.  Try again');
    }
    var year = input.getFullYear();
    var month = input.getMonth();
    Logger.log(month)
    if (month >= (monthStart -1)) {
      year += 1;
    }
    
    return year;
  } else {
    throw new Error ('The input must have a valid date format');
  }
}

/**
 * Returns the input date's numeric fiscal quarter.
 *
 * @param {date} input The date to convert.
 * @param {3} monthStart The start month of your fiscal year. 
 * @return The input's numeric fiscal quarter.
 * @customfunction
 */
function FISCALQTR(input, monthStart) {
  if (isDate(input)) {
    if (monthStart > 12 || monthStart < 1) {
      throw new Error ('The monthStart must be between 1 and 12.  Try again');
    }
    var year = input.getFullYear();
    var month = input.getMonth() + 1;
    var diff = month - monthStart;
    var qtr = '#N/A'
    switch (diff) {
      case (-11): { qtr = 1; break; }
      case (-10): { qtr = 1; break; }
      case (-9): { qtr = 2; break; }
      case (-8): { qtr = 2; break; }
      case (-7): { qtr = 2; break; }
      case (-6): { qtr = 3; break; }
      case (-5): { qtr = 3; break; }
      case (-4): { qtr = 3; break; }
      case (-3): { qtr = 4; break; }
      case (-2): { qtr = 4; break; }
      case (-1): { qtr = 4; break; }
      case (0): { qtr = 1; break; }
      case (1): { qtr = 1; break; }
      case (2): { qtr = 1; break; }
      case (3): { qtr = 2; break; }
      case (4): { qtr = 2; break; }
      case (5): { qtr = 2; break; }
      case (6): { qtr = 3; break; }
      case (7): { qtr = 3; break; }
      case (8): { qtr = 3; break; }
      case (9): { qtr = 4; break; }
      case (10): { qtr = 4; break; }
      case (11): { qtr = 4; break; }
    }
    return qtr;
  } else {
    throw new Error ('The input must have a valid date format');
  }
}

/**
 * Returns the input date's textual week day name.
 *
 * @param {date} input The date to convert.
 * @param {TRUE} display_fullname Indicates whether the returned name is displayed in full.  
 * @return The input's numeric fiscal quarter.
 * @customfunction
 */
function WEEKDAYNAME(input, display_fullname) {
  if (isDate(input)) {
    if (display_fullname === true || display_fullname === false) {
      var longName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var shortName = ['Sun', 'Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat'];
      var dayNumber = input.getDay();
      if (display_fullname === true) {
        return longName[dayNumber]; 
      } else {
        return shortName[dayNumber];
      }
    } else {
        throw new Error ('diplay_fullname must be true or false');   
      }
  } else {
    throw new Error ('The input must have a valid date format');
  }
}
//=========================================================================== helper functions

function isDate (x) 
{ 
  return (null != x) && !isNaN(x) && ("undefined" !== typeof x.getDate); 
}