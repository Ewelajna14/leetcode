class MyQueue {
  constructor() {
    this.s1 = [];
    this.s2 = [];
  }
  
  /**
   * Push element x to the back of queue. 
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.s1.push(x);
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
       if(this.s2.length === 0){
           while (this.s1.length > 0) {
              this.s2.push(this.s1.pop())
           }
       }
    return this.s2.pop()
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    if(this.s2.length === 0){
        while (this.s1.length > 0){
            this.s2.push(this.s1.pop())
        }   
    }
     return this.s2[this.s2.length - 1];
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.s1.length === 0 && this.s2.length === 0;
  }
}