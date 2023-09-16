// let qna_title = document.querySelectorAll(".qna-list-title");

// qna_title.forEach((el)=>{
//     el.addEventListener(("click"), (e)=>{
//         e.preventDefault();
//         let qna_td = el.parentElement;
//         let post = "";

//         post += `
//             <td class = "post" colspan="4">
                
//             </td>
//         `

//         qna_td.innerHTML = 
//     })
// })

let post_list = document.querySelectorAll(".post")

post_list.forEach((el)=>{
    let comment_input = el.querySelector('.post-comment-input');
    let input = "";
    input += `
        <p>답변을 남겨 주세요!</p>
        <label for="comment-title">제목</label>
        <input type="text" name="comment-title" id="comment-title">
        <label for="comment-detail">내용</label>      
        <textarea name="comment-detail" id="comment-detail" cols="30" rows="10"></textarea>
        <label for="comment-tag">태그</label>
        <input type="text" name="comment-tag" id="comment-tag">
    `
    comment_input.innerHTML = input;
})
