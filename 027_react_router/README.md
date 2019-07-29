
**React Router**

- Cho phép làm SPA
- Thao tác chức năng trên 1 trang, load các nội dung thay đổi mà không cần load lại cả trang 
- vd: gmail

=>>>

- Thao tác load lại chức năng mà không cần load lại cả trang
- React router lấy giữ liệu api, phân bố lại và load lại để chuyeernn hướng trang web mà không cần load lại trang

**Các bước làm việc với React Router:**

- 1: Tạo giao diện (tạo giao diện HTML sử dụng bootstrap4
- 2: Điều dưỡng kiểu SPA
- 3: Truyền tham số
- 4: Dúng Slug cho URL bằng React Router
- 5: router redirect

**Vào trang: https://reacttraining.com/react-router/web/guides/quick-start để xem hướng dẫn điều hướng cơ bản của router**

**Unit_36: Đặt trạng thái cho thanh điều hướng bằng activeClassName**

```
https://reacttraining.com/react-router/web/api/NavLink
```

**Unit_37:Tạo file dữ liệu JSON**

- Truyền tham số qua URL bằng react:

```
1. Mục đích: Làm đường dẫn thân thiện, dễ hiểu, dễ seo theo yêu cầu
2. Cách làm:
- Dữ liệu hóa: dưới dạng JSON
- Mapping dữ liệu vào trong trang html
- xử lý url
3. Cấu trúc dữ lieeujn 1 tin: 
- tên
- id 
- anh
- trích dẫn
- nội dung
```

**Unit_38: Load dữ liệu và tạo NewsItem**

- B1: Tạo 1 file NewsItem.js ( nội dung lấy từ file News.js) sau đó thêm biến props để lấy dữ liệu từ file News.js
```
import React, { Component } from 'react';

class NewsItem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="col-4">
                        .<div className="card-deck">
                            <div className="card">
                            <a href="detail.html"><img className="card-img-top" src={this.props.anh} alt="App for iphone" /></a> 
                            <div className="card-body">
                                <h4 className="card-title">{this.props.tieuDe}</h4>
                                <p className="card-text">{this.props.trichDan}</p>
                            </div>
                        </div>
                    <hr />
                </div>
            </div>
        );
    }
}

export default NewsItem;
```

- B2: Sau khi lấy nội dung từ file News.js thì phải thay nội dung đó bằng cách gọi hàm đã tạo là <NewsItem/> sau đó thêm các thuộc tính như ảnh, trích dẫn, tiêu đề vào sau 

```
<NewsItem 
anh="https://i.ytimg.com/vi/8aoH0Befu-g/hqdefault.jpg" 
tieuDe="Conan" 
trichDan="Thám tử lừng danh Conan, còn được biết đến dưới tên tiếng Nhật Meitantei Konan (名探偵コナン, Detective Conan), là một bộ truyện tranh trinh thám ..."></NewsItem>
<NewsItem 
anh="https://i.ytimg.com/vi/8aoH0Befu-g/hqdefault.jpg" 
tieuDe="Conan" 
trichDan="Thám tử lừng danh Conan, còn được biết đến dưới tên tiếng Nhật Meitantei Konan (名探偵コナン, Detective Conan), là một bộ truyện tranh trinh thám ..."></NewsItem>
<NewsItem 
anh="https://i.ytimg.com/vi/8aoH0Befu-g/hqdefault.jpg" 
tieuDe="Conan" 
trichDan="Thám tử lừng danh Conan, còn được biết đến dưới tên tiếng Nhật Meitantei Konan (名探偵コナン, Detective Conan), là một bộ truyện tranh trinh thám ..."></NewsItem>

```
- NOTE: npm start chúng ta sẽ thấy ảnh, tiêu đề và trích dẫn xuất hiện trên trang news, các thuộc tính trên là tự thêm vào chưa liên quan đến phần lấy dữ liệu từ file "data.json"
- B3: Tạo 1 file dữ liệu "/components/data.json"
```
[
            {
                "id":1,
                "tieuDe":"Khóa học Lập trình STEM nâng cao",
                "trichDan":"Sau khi hoàn thành khóa học Lập trình STEM cơ bản sử dụng bộ kit LHV-STEM hoàn toàn miễn phí, Lớp học vui tiếp tục gửi tới các bạn khóa học “Lập trình STEM nâng cao",
                "noiDung":"Với khóa học này, một lần nữa, Lớp học vui đưa ra cho bạn phương pháp tiếp nhận kiến thức dành cho giáo dục STEM một cách thú vị mà hiệu quả nhất dựa trên bộ kit LHV-STEM (Sản phẩm độc quyền của LopHocVui).",
                "anh":"https://lophocvui.com/wp-content/uploads/2018/09/stem-nang-cao-450x300.jpg"
        
            },
            {
                "id":2,
                "tieuDe":"Lập trình Python cơ bản",
                "trichDan":"Ngôn ngữ lập trình Python là một ngôn ngữ lập trình scripting phổ biến và hết sức thú vị.",
                "noiDung":"Khóa học có khoảng 30 video. Mỗi video dài trung bình 15 phút, có nhiều câu hỏi quiz ôn tập kiến thức hoặc bài tập lập trình. Mỗi video dạy lập trình trọn vẹn một ví dụ lớn hoặc 2-4 ví dụ ngắn gắn liền với các hiện tượng thực tế, ví dụ code đo độ ẩm không khí, nhiệt độ hoặc nhiệt biến thiên của đất…vvv. Vậy xin mời các bạn cùng tham gia khóa học nhé!",
                "anh":"https://miro.medium.com/max/700/1*RJMxLdTHqVBSijKmOO5MAg.jpeg"
        
            },
            {
                "id":3,
                "tieuDe":"Lập trình robot Arduino dành cho trẻ em, học sinh",
                "trichDan":"Hiện nay, trong thời đại cách mạng công nghệ, giáo dục STEM là một phương pháp giáo dục đang được áp dụng tích cực ở các nước phát triển (như Mỹ, Đức, Anh, …). ",
                "noiDung":"Với mong muốn đưa ra các phương pháp tiếp nhận kiến thức dành cho giáo dục STEM một cách tối ưu nhất Lớp Học Vui trân trọng mang đến cho các bạn một khóa học tốt nhất về lập trình robot. Xin mời các bạn cùng tham gia khóa học!",
                "anh":"https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/13/14/441115db-674c-415c-bdbc-07e6ed22eb80.jpg"
        
            },
            {
                "id":4,
                "tieuDe":"Lập trình Scratch dành cho trẻ em",
                "trichDan":"Scratch là một ngôn ngữ lập trình trực quan được nghiên cứu và phát triển bởi nhóm Lifelong Kindergarten thuộc trung tâm Media Lab của Viện công nghệ Massachusetts (Massachusetts Institute of Technology – MIT).",
                "noiDung":"Scratch là môi trường tuyệt vời, nơi trẻ em có thể tự lập trình , tự tạo ra các sản phẩm trí tuệ bằng sự sáng tạo của riêng mình và chia sẻ các sản phẩm tương tác như trò chơi, hoạt hình, và những chú robot xinh xắn với mọi người trên thế giới. Khi trẻ em sáng tạo cùng Scratch, chúng sẽ học được cách suy nghĩ sáng tạo, làm việc theo nhóm, và suy luận có hệ thống. Mời các bạn cùng theo dõi khóa học hấp dẫn này nhé!",
                "anh":"https://lophocvui.com/wp-content/uploads/2018/09/stem-nang-cao-450x300.jpg"
        
            },
            {
                "id":5,
                "tieuDe":"Khóa học Lập trình STEM nâng cao",
                "trichDan":"Sau khi hoàn thành khóa học Lập trình STEM cơ bản sử dụng bộ kit LHV-STEM hoàn toàn miễn phí, Lớp học vui tiếp tục gửi tới các bạn khóa học “Lập trình STEM nâng cao",
                "noiDung":"Với khóa học này, một lần nữa, Lớp học vui đưa ra cho bạn phương pháp tiếp nhận kiến thức dành cho giáo dục STEM một cách thú vị mà hiệu quả nhất dựa trên bộ kit LHV-STEM (Sản phẩm độc quyền của LopHocVui).",
                "anh":"https://media-kyna.cdn.vccloud.vn/uploads/courses/1245/img/video_cover_image_url-1536552993.crop-730x436.png"
        
            },
            {
                "id":6,
                "tieuDe":"Lập trình trên bộ KIT Clover Edu Starter",
                "trichDan":"Bộ KIT Clover Edu Starter là một sản phẩm tuyệt vời giúp các bạn nhỏ phát triển khả năng sáng tạo",
                "noiDung":"Qua nhiều khảo sát, các bạn nhỏ thích thú với việc tạo ra các sản phẩm hơn là sử dụng chúng. Từ đó, chúng tôi đã nghiên cứu ra một số bộ công cụ hỗ trợ học tập. Một trong những số đó là bộ KIT Clover Edu Starter giúp cho các bạn nhỏ thỏa sức sáng tạo. Đi kèm với bộ KIT này là những bài giảng mới lạ, độc đáo và thú vị. Qua đây, chúng tôi xin giới thiệu với các bạn khóa học “Lập trình cơ bản với bộ KIT Clover Edu Starter”. Khóa học với bộ KIT này sẽ được đi từ cơ bản đến nâng cao. Từ đó sẽ giúp các bạn nhỏ hiểu từng bước, từng bước một.",
                "anh":"https://lophocvui.com/wp-content/uploads/2018/07/Clover-car-orange-3-e1531556396245-450x299.png"
        
            }
]
        
```
- B4: import data from './data.json'; vào file News.js, và console.log(data) để kiểm tra xem dữ liệu đã xuất hiện trên web chưa bằng cách vào web inspect kiểm tra phần console

```
class News extends Component {
    render() {
        console.log(data);
        
        return (
```
===> Sang bài sau sẽ mapping dữ liệu vào components

**Unit_39: Mapping dữ liệu vào Component**

- Trong bài trước đã load thành công dữ liệu ra và tạo 1 component nhỏ là NewsItem, bây giờ sẽ chuyển dữ liệu từ dữ liệu được load từ Array vào trong News

---> Sử dụng hàm "Map"

```
- hàm map giống hàm foreach trong PHP
- duyệt từng phần tử, xử lý gì đó với từng phần tử trong arrowfunction
- vd:
var so = [1,2,3,4];
        var so2 = so.map((value,key) => value*2 + key);
        console.log(so2);
- note: value, key là 2 tham số, có thể thay bằng tên khác cũng dc
```
- Thay B2 trong Unit_38 như sau để lấy dữ liệu trong file data.json

```
<div className="container">
                        <div className="row mt-3">
                            {

                            data.map((value,key) => {
                                return (
                                    <NewsItem key={key}
                                    anh={value.anh}
                                    tieuDe={value.tieuDe}
                                    trichDan={value.trichDan}
                                    ></NewsItem>
                                )
    
                            })

                            }
                          
                            
                        </div>
                    </div>
```
**NOTE**
- Nếu trong file data.json để form là:
```

{
    "data": {
        "forms": [
         {
         },
         {
         }
        ]
        
    }
}
```

**---> cần sửa chỗ data.map((value,key) thành data.data.forms.map((value,key)**

**Unit_40:Tạo đường dẫn thân thiện với SEO trong React JS**

- Đường dẫn thân thiện - từ khóa: Slug

- Thêm id bằng cách thêm thuộc tính id vào trong file News.js
 ```
                           data.map((value,key) => {
                                return (
                                    <NewsItem key={key}
                                    newsId={value.id}
                                    anh={value.anh}
                                    tieuDe={value.tieuDe}
                                    trichDan={value.trichDan}
                                    ></NewsItem>
                                )
    
                            })
```
- b1: tạo 1 cấu trúc url theo ý muốn, vào file NewsItem.js:
```
<div className="col-4">
                        .<div className="card-deck">
                            <div className="card">
                            <a href={"/news/" + this.props.tieuDe + "-" + this.props.newsId + ".html"}><img className="card-img-top" src={this.props.anh} alt="App for iphone" /></a> 
                            <div className="card-body">
                                <h4 className="card-title">{this.props.tieuDe}</h4>
                                <p className="card-text">{this.props.trichDan}</p>
                            </div>
                        </div>
                    <hr />
                </div>
            </div>
```
- b2: convert từ tên tiếng Việt thành Slug - search "slug javascipt"
sau đó copy hàm 
```
function to_slug(str)
{
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
}
```
---> copy hàm trên cho vào file NewsItem.js và chuyển sang dạng ArrowFunction

```
import React, { Component } from 'react';

class NewsItem extends Component {
    constructor(props) {
        super(props);
        
    }
    chuyenDoiURL= (str ) => {
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    
    render() {
        return (
            <div className="col-4">
                        .<div className="card-deck">
                            <div className="card">
                            <a href={"/news/" + this.props.tieuDe + "-" + this.props.newsId + ".html"}><img className="card-img-top" src={this.props.anh} alt="App for iphone" /></a> 
                            <div className="card-body">
                                <h4 className="card-title">{this.props.tieuDe}</h4>
                                <p className="card-text">{this.props.trichDan}</p>
                            </div>
                        </div>
                    <hr />
                </div>
            </div>
        );
    }
}
```
- b3: cuối cùng sửa 
```
<a href={"/news/" + this.props.tieuDe + "." + this.props.newsId + ".html"}><img className="card-img-top" src={this.props.anh} alt="App for iphone" /></a> 
```
---> thành:
```
<a href={"/news/" + this.chuyenDoiURL(this.props.tieuDe) + "-" + this.props.newsId + ".html"}><img className="card-img-top" src={this.props.anh} alt="App for iphone" /></a> 
```

**Unit_41: Nhận tham số truyền vào qua URL Parameter**

- https://reacttraining.com/react-router/web/example/url-params
- Trong file "HongNhung.js" tức là trang điều hướng cần chỉnh sửa lại đường dẫn tới trang chi tiết để khi click vào 1 sản phẩm của bên trang "news" để xem chi tiết sản phẩm nhưng trang "detail" khi SEO đường dẫn bằng slug

```
<Route path="/news/:slug.:id.html" component={Detail} />
```
- Để kiểm tra xem slug này đã đúng hay chưa => vào file "Detail.js" console log để kiểm tra 
```
console.log(this.props);
```
**note**: props sẽ ỉn ra tất cả những thuộc tính liên quan đến "Detail" khi mà được gọi ra

---> Khi click vào 1 sản phẩm ở trang News thì sẽ ra trang Detail

**Unit_42: Phun dữ liệu ra giao diện dựa vào URL Parameter**

- Trong bài trước đã lấy được param là slug và id
- b1: lấy id từ bài viết
- b2: sử dụng map để duyệt từng phần tử xem tin nào trùng phần tử id(lấy từ b1) thì lấy ra và in ra
- Trong file Detail.js sửa console thành 
```
console.log(this.props.match.params.id);
```
----> Mục đích để lấy id và dựa vào id để lấy ra nội dung trong file data.json

- import dữ liệu vào file Detail.js
```
import data from './data.json';
```
- Sau đó lấy dữ liệu trong file data.json và so sánh xem id trong file data.json có giống id lấy ra không, so sánh theo kiểu đồng nhất
```
- So sánh đồng nhất là phải trùng nhau về kiểu dữ liệu và nội dung
- sử dụng dấu == (chỉ cần trung nội dung là ok)
- sử dụng ép kiểu parseInt
- typeof
```
 {
                    data.map((value,key) => {
                        if(value.id == this.props.match.params.id){
                            return (
                                <div className="jumbotron jumbotron-fluid">
                                <div className="container">
                                    <img src={value.anh} className="img-fluid rong100" alt="Demo" />
                                    
                                    <h3 className="lead text-center">{value.tieuDe}</h3>
                                    <hr className="my-2" />
                                    {
                                        value.noiDung
                                    }
                                
                                </div>
                                </div>
                            )
                    
                            
                        }
                    })
                }

```

**Unit43:Xử lý phần NewsRelated Component**

- b1: in ra danh sách các tin
- b2: Trong lúc in ra kiểm tra xem có cái id nào === id được nhận vào, nếu trùng thì bỏ qua
- Tạo 1 component mới cho tin liên quan là file "NewsRelated.js", về cơ bản thì phần nội dung trong file này giống vs file "NewsItem.js"
```
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewsRelated extends Component {
    constructor(props) {
        super(props);
        
    }
    
    // 
    chuyenDoiURL= (str ) => {
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // xóa phần dự - ở đầu
        str = str.replace(/^-+/g, '');
    
        // xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }
    
    render() {
        return (
            <div className="col-3">
                        .<div className="card-deck">
                            <div className="card">
                            <Link to={"/new-news/" + this.chuyenDoiURL(this.props.tieuDe) + "." + this.props.newsId + ".html"}><img className="card-img-top" src={this.props.anh} alt="App for iphone" /></Link> 
                            <div className="card-body">
                                <h4 className="card-title">{this.props.tieuDe}</h4>
                                <p className="card-text">{this.props.trichDan}</p>
                            </div>
                        </div>
                    <hr />
                </div>
            </div>
        );

    }
}

export default NewsRelated;
```
- Tiếp theo modify lại file Detail.js 
```

                    <div className="container">
                    <h4 className="card-title text-center">Related News</h4>
                    <div className="row">
                        <div className="col-12">
                        <div className="card-deck">
                            {
                                data.map((value,key) => {
                                    if(key <= 3){
                                        return(
                                            <NewsRelated key={key}
                                            newsId={value.id}
                                            anh={value.anh}
                                            tieuDe={value.tieuDe}
                                            trichDan={value.trichDan}>
                                                
                                            </NewsRelated>
                                        )
                                    }
                                    
                                })
                            }
                            
                            
                        </div>
                        </div>
                    </div>
                    </div>
```

**Unit_44:Hoàn thiện phần tin liên quan**

- Bỏ dkdi tin liên quan, nghĩa là kiểm tra xem tin liên quan mà mình chọn xem có bị trùng vs 1 trong những tin đó không, nếu trùng thì loại bỏ

```
if(value.id == this.props.match.params.id)
```
- Kiểm tra xem id này nếu trùng với id được nhận vào thì loại bỏ
- b1: khai báo 1 biến count dưới hàm render
```
var count = 1
```
- b2: đưa ra điều kiện 
```
{
                                data.map((value,key) => {
                                    console.log(key);
                                    if(value.id != this.props.match.params.id){
                                        if(count <= 4){
                                            count++;
                                            return(
                                                <NewsRelated key={key}
                                                newsId={value.id}
                                                anh={value.anh}
                                                tieuDe={value.tieuDe}
                                                trichDan={value.trichDan}>
                                                    
                                                </NewsRelated>
                                            )
                                        }
                                    }
                                    
                                })
                            }
```




