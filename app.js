let http = new easyHTTP();

document.getElementById('get').onclick = function () {
  http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
      alert(err);
    } else {
      document.getElementById('response').innerText = response;
    }
  })
}

document.getElementById('post').onclick = function () {
  http.post('https://jsonplaceholder.typicode.com/posts', { title: 'Hello', message: 'World' }, function (err, response) {
    if (err) {
      alert(err);
    } else {
      document.getElementById('response').innerText = response;

    }
  })
}

document.getElementById('put').onclick = function () {
  http.put('https://jsonplaceholder.typicode.com/posts/1', { title: 'Hello', message: 'World' }, function (err, response) {
    if (err) {
      alert(err);
    } else {
      document.getElementById('response').innerText = response;

    }
  })
}

document.getElementById('delete').onclick = function () {
  http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
    if (err) {
      alert(err);
    } else {
      document.getElementById('response').innerText = response;

    }
  })
}






