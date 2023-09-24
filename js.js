const video = document.getElementById('video')
const button = document.getElementById('btn')
const buttonsr = document.getElementById('btn-sl-sreen')


async function slMediaStrem(){
    try {
        const mediastream = await navigator.mediaDevices.getDisplayMedia()
        video.srcObject = mediastream
        video.onloadedmetadata = ()=>{
            video.play()
        }
    } catch (error) {
        console.log('There is something worng check your code', error)
    }
}

button.addEventListener('click' , async()=>{
    button.disabled = true
    await video.requestPictureInPicture()
})

buttonsr.addEventListener('click', async()=>{
    slMediaStrem()
    await video.requestPictureInPicture()

})

slMediaStrem()