let videoData = JSON.parse(localStorage.getItem("video"))

// console.log(videoData.videoId)
let videoId = videoData.videoId || videoData.id

let videoAppend = (videoData) => {
    console.log(videoId)
    let iframe = document.createElement('iframe')
    iframe.src = `https://www.youtube.com/embed/${videoId}`
    iframe.allow = 'fullscreen'
    iframe.allow = 'picture-in-picture'
    iframe.allow = 'accelerometer'
    iframe.width = '560'
    iframe.height = '315'
    iframe.frameborder = '0'
    iframe.setAttribute('id', 'iframe')

    document.querySelector('#vidContainer').append(iframe)
}


videoAppend()

document.querySelector("#profile").onclick = () =>{
    profileFun()
}

let profileFun = () => {
    alert("Create an Account")
}