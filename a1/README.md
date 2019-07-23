

# REACT 8-)
1. Chạy ứng dụng react js
+ npm install -g create-react-app ( cài đặt công cụ trên create-react-app
+ create-react-app "app_name" ( có luôn 1 folder mới trong đó có đủ các thứ cần dùng cho reactjs đúng chuẩn của nhà phát triển) 

2. Component
+ Là 1 khối đóng gói bên trong bao gồm các thẻ HTMl, props (các thuộc tính), state,...
+ Tạm hiểu như là thẻ HTML mà mình tự định nghĩa ra
+ Để làm web bằng reactjs phải chuyển đổi HTML thông thường sang dạng component 

=> Chương trình có thển đóng gói các khối code thành các khối độc lập, có đầy đủ các chức năng tương tác và hướng đối tượng bên trong đó.

+ Định nghĩa Component cách 1: sử dụng function

**vd1:** nếu muốn trả về nhiều dòng trong 1 function thì đưa các thẻ vào bên trong duy nhất 1 "div"

```
function One(){
  return (
    <div> 
      <h2> So 1 tap 1</h2>
      <h3> So 1 tap 2</h3>
    </div>
  )
}
```
+ Trả về function 
```
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <One/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
</header>
```
+ Định nghĩa Componnent cách 2: anonymous function

```
var Two = function(){
  return (
    <div>
      <h2> Cach so 2 </h2>
    </div>
  );
}
```
+ Định nghĩa Component cách 3: arrow function (es6)
```

var Three = () => (
                    <div>
                      <h2> Cach so 3 </h2>
                    </div>
                  );
 
```
+ Định nghĩa kiểu class: 
```
class Four extends React.Component {
  render() {
    return (
      <div>
        <button> So 4 </button>
      </div>
    );
  }
}        
```


