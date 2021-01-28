
        $("#submit-form").validate({
            rules: {
                Name: {
                    required: true
                },
                email: {
                    required:true,
                    email:true
                },
                Phone:{
                    required:true,
                    number:true,
                    minlength:10
                },
                message:{
                    required:true
                }
            },
        submitHandler:(form,e) => {
            e.preventDefault();
            $.ajax({
                url: "https://script.google.com/macros/s/AKfycbzOT9SDo3yT4E5oQDExDHGdd5mih0gc6XVzUg86abwcn6yneIg58L0N0w/exec",
                data: $("form").serialize(),
                method: "post",
                success: function (response) {
                    alert("Form submitted successfully")
                    window.location.reload()
                   //    window.location.href="https://google.com"
                },
                error: function (err) {
                    alert("Something Error")

                }
            })
       
    }
});






// $(function(){
//     if($("#submit-form").length){
//         $("#submit-form").validate({
//             rules: {
//                 Name: {
//                     required: true
//                 },
//                 email: {
//                     required:true,
//                     type:email
//                 },
//                 Phone:{
//                     required:true,
                   
                    
//                 },
//                 message:{
//                     required:true
//                 }
//             }
//         }) 
//     }else{
//         $("#submit-form").submit((e) => {
//             e.preventDefault()
//             $.ajax({
//                 url: "https://script.google.com/macros/s/AKfycbzOT9SDo3yT4E5oQDExDHGdd5mih0gc6XVzUg86abwcn6yneIg58L0N0w/exec",
//                 data: $("#submit-form").serialize(),
//                 method: "post",
//                 success: function (response) {
//                     alert("Form submitted successfully")
//                     window.location.reload()
//                    //    window.location.href="https://google.com"
//                 },
//                 error: function (err) {
//                     alert("Something Error")

//                 }
//             })
//         })
//     }
// })




