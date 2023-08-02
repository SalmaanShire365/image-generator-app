/* eslint-disable no-unused-vars */
import React from 'react'


export default function Generator() {

    const [imageText, setImageText] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        async function getImages() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemeImages(data.data.memes)
        }
        getImages()
    }, [])
    function getImage() {

        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setImageText(prevImage => ({
            ...prevImage,
            randomImage: url
        }))
    }
    function handleChange(event) {
        const { name, value } = event.target
        setImageText(prevImage => ({
            ...prevImage,
            [name]: value
        }))
    }
    return (
        <main>
            <div className='form'>
                <input
                    type="text"
                    className='form--1'
                    placeholder='Top text'
                    name='topText'
                    value={imageText.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    className='form--1'
                    placeholder='Bottom text'
                    name='bottomText'
                    value={imageText.bottomText}
                    onChange={handleChange}
                />
                <button onClick={getImage} className='form--button'>Get a new image from search</button>
            </div>
            <div className='image--1'>
                <img src={imageText.randomImage} className='image-image' />
                <h2 className="image-text top">{imageText.topText}</h2>
                <h2 className="image-text bottom">{imageText.bottomText}</h2>
            </div>
        </main>
    )
}
