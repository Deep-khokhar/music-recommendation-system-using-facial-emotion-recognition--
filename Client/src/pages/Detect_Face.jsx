import React, { useEffect, useRef } from 'react'
import Header from '../component/Header'

export default function Detect_Face() {

    let videoRef = useRef(null)

    let photoRef = useRef(null)

    const getUserCamera = () => {
        navigator.mediaDevices.getUserMedia({
            video: true
        })
            .then((stream) => {
                let video = videoRef.current
                video.srcObject = stream
                video.play()
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const takePicture = () => {
        let width = 500
        let height = width / (16 / 9)
        let photo = photoRef.current
        let video = videoRef.current

        photo.width = width
        photo.height = height

        let ctx = photo.getContext('2d')

        ctx.drawImage(video, 0, 0, photo.width, photo.height)
    }

    const clearImage = () => {
        let photo = photoRef.current
        let ctx = photo.getContext('2d')
        ctx.clearRect(0,0,photo.width,photo.height)
    }

    useEffect(() => {
        getUserCamera()
    }, [videoRef])

    return (
        <>
            <Header />

            <h1 className="text-center text-white">Click your photo here</h1>
            <video className='container mt-4' ref={videoRef} style={{ height: "500px", marginLeft: "90px" }}></video>
            <div className="btn w-100">
                <button onClick={takePicture} className=''>Take Picture</button></div>
            <canvas className='container  w-50 ' style={{ marginLeft: "100px" }} ref={photoRef}></canvas>
            <div className="btn w-100">
           <button onClick={clearImage} className=''>Clear Picture</button></div>
        </>
    )
}
