class IntegerListGennerator {
  #integersMap = new Map<number, number>();

  /**
   * IntegerListGennerator class constructor.
   * @name constructor
   * @param {number} minNumber - The min number to start generate list.
   * @param {number} maxNumber - The max number to end generate list.
   * @return Istance of the class.
   */
  constructor(minNumber?: number, maxNumber?: number) {
    const isMinInteger = Number.isInteger(minNumber);
    const isMaxInteger = Number.isInteger(maxNumber);
    const isMaxGreaterMin = maxNumber > minNumber;

    const MIN = (isMinInteger && isMaxGreaterMin) ? minNumber : 1;
    const MAX = (isMaxInteger && isMaxGreaterMin) ? maxNumber : 10000;

    this.#fillList(MIN, MAX);
    this.#shuffleList(MIN, MAX);
  }

  /**
   * Method to fill the list from min value to max value.
   * @name fillList
   * @param {number} MIN - The min number to start generate list.
   * @param {number} MAX - The max number to end generate list.
   * @return {void}
   */
  #fillList(MIN: number, MAX: number): void {
    this.#integersMap = new Map([[MIN, MIN]]);

    while (this.#integersMap.size < MAX) {
      const newKeyValue = this.#integersMap.size + 1;

      this.#integersMap.set(newKeyValue, newKeyValue);
    }
  }

  /**
   * Method to get a key index from #integersMap key range.
   * @name getRandomKey
   * @param {number} MIN - The min key number in the #integersMap list.
   * @param {number} MAX - The max key number in the #integersMap list.
   * @return {number} Return a key index from #integersMap key range
   */
  #getRandomKey(MIN: number, MAX: number): number {
    let isWrongInteger = true;
    let resultInteger: number = 0;

    while (isWrongInteger) {
      resultInteger = Math.floor(Math.random() * MAX);

      if (resultInteger >= MIN && resultInteger <= MAX) {
        isWrongInteger = false;
      }
    }

    return resultInteger;
  }

  /**
   * Method to shuffle the list values.
   * @name shuffleList
   * @param {number} MIN - The min key number in the #integersMap list.
   * @param {number} MAX - The max key number in the #integersMap list.
   * @return {void}
   */
  #shuffleList(MIN: number, MAX: number): void {
    let iterationsNumber = MIN;

    while (iterationsNumber < MAX) {
      const randomKey = this.#getRandomKey(MIN, MAX);

      const currentValue = this.#integersMap.get(iterationsNumber);
      const randomValue = this.#integersMap.get(randomKey);

      this.#integersMap.set(iterationsNumber, randomValue);
      this.#integersMap.set(randomKey, currentValue);

      iterationsNumber += 1;
    }
  }

  /**
   * To get generated list as an array.
   * @name getGeneratedArray
   * @return {Array} Generated list as an array
   */
  public getGeneratedArray(): number[] {
    const resultArray: number[] = [];

    this.#integersMap.forEach((value) => {
      resultArray.push(value);
    });

    return resultArray;
  }

  /**
   * To get generated list as a map.
   * @name getGeneratedMap
   * @return {Map} Generated list as a map.
   */
  public getGeneratedMap() {
    return this.#integersMap;
  }
}

export default IntegerListGennerator;
