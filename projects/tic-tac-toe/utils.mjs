export const wait = (delay) => new Promise((res) => setTimeout(res, delay));

export class AsyncIterator {
  constructor(next) {
    this.next = next;
  }

  [Symbol.asyncIterator]() {
    return this;
  }

  async next() {
    // if (!Array.isArray(this.records) || this.records.length === this.limit) {
    //   this.records = await this.pull(this.limit, this.offset, ...this.pullProps);
    //   this.offset += this.limit;
    //   return { value: this.records, done: false };
    // }
    // return { done: true };
  }
}