import { motion } from 'framer-motion'
import { AiFillPicture } from 'react-icons/ai'
import { useState } from 'react'

export default function ImagePicker() {
  const [selectedImage, setSelectedImage] = useState('')

  const handleImageHandler = (e) => {
    const file = e.target.file[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  return (
    <motion.label
      className="bg-card border border-primary-foreground text-primary-foreground flex gap-2 hover:text-secondary hover:bg-primary-foreground rounded-xl flex-row items-center justify-center  px-4"
      initial={{ scale: 0.9, opacity: 0.1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1 }}
      role="button"
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleImageHandler}
        className="hidden"
      />
      <AiFillPicture />
      <span className="text-nowrap">Change background</span>
    </motion.label>
  )
}
