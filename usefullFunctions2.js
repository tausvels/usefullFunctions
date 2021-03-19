import moment from "moment-timezone";

// -------------------------
// Date Range String Creator
// -------------------------
export const dateRangeStr = (startAt, endAt, location_timezone) => {
  /**
   * startAt -> 1234577765644
   * endAt -> 16546131034616
   * location_timezone -> america/vancouver
   */
  let timezone = location_timezone || moment.tz.guess();
  const now = new Date().getTime();
  const timeRemainingFromStart = (startAt ? startAt - now : -now) / 1000;
  if (timeRemainingFromStart < 0) {
    // in the past
  } else if (timeRemainingFromStart < 60) {
    return `Starts in ${Math.floor(timeRemainingFromStart)} sec`;
  } else if (timeRemainingFromStart < 3600) {
    return `Starts in ${Math.floor(timeRemainingFromStart / 60)} min`;
  } else if (timeRemainingFromStart < 86400) {
    return `Starts in ${Math.floor(timeRemainingFromStart)} hrs`;
  }
  /**
   * Modifying the date range string
   */
  const startMonth = moment.tz(startAt, timezone).format("MMM");
  const startDay = moment.tz(startAt, timezone).format("D");
  const startString = `${moment.tz(startAt, timezone).format("MMM D YYYY")}`;
  /**
   * if there's an end date
   */
  if (endAt) {
    const endMonth = moment.tz(endAt, timezone).format("MMM");
    const endDay = moment.tz(endAt, timezone).format("D");
    const endString =
      startMonth !== endMonth
        ? moment.tz(endAt, timezone).format("MMMM D YYYY")
        : moment.tz(endAt, timezone).format("D YYYY");
    if (startMonth === endMonth && startDay === endDay) {
      return `${startString} - ${endString}`;
    }
  }
  /**
   * If invalid date
   */
  if (startString === "Invalid date") {
    // <-- 'invalid date coming from BE
    return "TBD";
  }
  return startString;
};

// -------------------------
// String to Title Case
// -------------------------
export const titleCase = (inputString) => {
  if (!inputString) return "";
  const strArr = inputString.toLowerCase().split(" ");
  const formattedString = strArr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1)
  );
  return formattedString.join(" ");
};

// ------------------------
// Remove Duplicate
// -----------------------
export const removeDuplicate = (stringArr) => {
  const formattedStringArr = stringArr.map((str) => str.toLowerCase());
  const uniqueStringArr = Array.from(new Set(formattedStringArr));
  return uniqueStringArr; // Returns lowerCased string arr
};

// -------------------------
// Autogenerate empty field
// -------------------------
export const autogenerateEmptyField = (arr, arrOfProp, k1, k2) => {
  /**
   * * arrOfProp = ['title', 'age', 'occupation']
   * * k1 and k2 are properties that is used to filter
   * * e.g. k1 = 'title', k2='age'
   */
  // -------------------------------------------------------------------------- //
  /**
   * Use case
   * const [givenArr, setGivenArr] = useState([{ title: "Tausif", age: 28 }]);
   * const itemsWithEmpty = getEmptyField(givenArr, ["title", "age"], "title", "age");
   * {itemsWithEmpty.map((item, i) => (
        <div key={i}>
          <input
            type="text"
            defaultValue={item.title}
            name="title"
            onChange={({ target: { name, value } }) => {
              const newItems = [...(givenArr || [])];
              if (typeof newItems[i] === "undefined") newItems[i] = {};
              newItems[i][name] = value;
              setGivenArr(newItems);
            }}
          />
          <input
            type="text"
            value={item.age}
            name="age"
            onChange={({ target: { name, value } }) => {
              const newItems = [...(givenArr || [])];
              if (typeof newItems[i] === "undefined") newItems[i] = {};
              newItems[i][name] = value;
              setGivenArr(newItems);
            }}
          />
        </div>
      ))}
   */
  const empty = arrOfProp.map((property) => ({ [property]: "" }));
  if (!Array.isArray(arr)) return empty;
  if (arr.length === 0) return empty;
  const nonEmptyFields = arr.filter((obj) => !!obj[k1] || !!obj[k2]);
  return [...nonEmptyFields, empty];
};

/**
 * @description Deletes object keys by RECURSION
 * @param {Object} input
 * @param {String} key
 * @returns nothing but it modifies the original input
 */
const objectModifier = (input, key) => {
  if (typeof input === "object") {
    delete input[key]
    
    for (const i in input) {
      objectModifier(input[i], key)
    }
  }
}
/**
 * @description Uses the above specified recursion function
 * @param {Object} input 
 * @param {String} key 
 * @returns new object
 */
export const removeKey = (input, key) => {
  const inputCopy = {...input}
  objectModifier(inputCopy, key)
  return inputCopy
}
