/*
 *
 * Task 0
 *
 * Создайте функцию конструктор Http, которая будет иметь 2 метода
 *
 * createServer() - принимает один аргумент функцию с двумя параметрами ctx и next
 * ctx: Object<Object> {
 *   req: Object
 *     PORT: number
 *     url: string
 *   res: Object
 *     status: number,
 *     message: string,
 *     header: Object {
 *       content-type:application/json
 *       }
 *   }
 * next: Function
 *
 *
 * listen(PORT, host) - в консоле должна отобразится надпись "Server running on https://host:port"
 * и вызваться переданная в createServer функция
 *
 *
 * методы нужно вызывать через chain
 * после вызова метода listen() - должна вызываться переданная в createServer
 * первая функция и возвращать объект и функцию
 *
 * */
debugger
let ctx1 = {
  req: {
    PORT: 123,
    url: 'bla-bla'
  },
  res: {
    status: 555,
    message: 'hello',
    header: {
      'content-type': 'application/json'
    }
  }
};



function myFunk(ctx, next){
return this
};

function Http() {

}


Http.prototype.createServer = function(func) {
  this.func = func;
  return this
}

Http.prototype.listen = function (port, host) {
  console.log(`Server running on https://${host}:${port}`);
  this.func();
  return this
}


const server = new Http().createServer(myFunk(ctx1, function(){alert('hi')})).listen(3000, 'localhost');
console.log(server);






