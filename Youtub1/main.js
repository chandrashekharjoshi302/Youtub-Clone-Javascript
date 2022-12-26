// url :- `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]'

let apiKey = `AIzaSyD4q9eTGU1pkesnxaao0t33d9GPsnYMEIE`

let id

let search = async () => {
    let query = document.querySelector("#query").value

    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${apiKey}`

    let res = await fetch(url)

    let data = await res.json()
   //console.log(data)
  //console.log(data.items)
    append(data.items)





  
}



let append = (data) =>{
    let container = document.querySelector("#container")

    container.innerHTML = null

    data.forEach(({id : {videoId}, snippet: {title},snippet:{channelTitle} ,snippet: {thumbnails: {medium:{url}}}}) => {

        let box = document.createElement("div")
        // let iframe = document.createElement('iframe')
        // iframe.src = `https://www.youtube.com/embed/${videoId}`
        
        let thumbnail = document.createElement("img")
        thumbnail.src = url
        thumbnail.setAttribute("class",'thumbnail')
        
        let name = document.createElement("p")
        name.innerText = title
        name.setAttribute("class", 'vidName')
        
        let channelName = document.createElement('p')
        channelName.innerText = channelTitle
        channelName.setAttribute("class", 'channelName')
        
        let video = {
            title,
            videoId
        }

        box.onclick = () =>{
            playVideo(video)
        }

        box.append(thumbnail, name, channelName)
        container.append(box)
    })
}

let playVideo = (video) => {
    localStorage.setItem("video", JSON.stringify(video))

    window.location.href = 'video.html'
}

let trending = async () => {
    let trendingUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=${apiKey}`
    // console.log(trendingUrl)

    let trendingRes = await fetch(trendingUrl)
    let trendingData = await trendingRes.json()

    console.log(trendingData)
    trendingAppend(trendingData.items)
}
// trending()

let trendingAppend = (details) => {
    let container = document.querySelector("#container")

    container.innerHTML = null

    details.forEach(({id , snippet: {title},snippet:{channelTitle} ,snippet: {thumbnails: {medium:{url}}}}) => {

        let box = document.createElement("div")
        
        // let iframe = document.createElement('iframe')
        // iframe.src = `https://www.youtube.com/embed/${videoId}`
        
        let thumbnail = document.createElement("img")
        thumbnail.src = url
        thumbnail.setAttribute("class",'thumbnail')
        
        let name = document.createElement("p")
        name.innerText = title
        name.setAttribute("class", 'vidName')
        
        let channelName = document.createElement('p')
        channelName.innerText = channelTitle
        channelName.setAttribute("class", 'channelName')
        
        let video = {
            title,
            id
        }

        box.onclick = () =>{
            playVideo(video)
        }

        box.append(thumbnail, name, channelName)
        container.append(box)
    })
}

trending()


document.querySelector("#profile").onclick = () =>{
    profileFun()
}

let profileFun = () => {
   alert("Create an Account")
   //location.href = "login.html"

}






