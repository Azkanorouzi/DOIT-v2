import { motion } from 'framer-motion'
import {
  useUploadBackgroundMutation,
  useUploadProfileMutation,
} from '@/redux-cake/user-slices/userSlice'
import LoaderSmall from './LoaderSmall'
import useCurrentUser from '@/hooks/useCurrentUser'
import { ReactNode } from 'react'

export default function ImagePicker({
  type = 'profile',
  text,
  icon,
  style,
}: {
  type?: 'profile' | 'background'
  text: string
  icon: ReactNode
  style?: string
}) {
  const [uploadProfile, { isLoading: isProfileLoading }] =
    useUploadProfileMutation()
  const [uploadBackground, { isLoading: isBackgroundLoading }] =
    useUploadBackgroundMutation()

  const isLoading = type === 'profile' ? isProfileLoading : isBackgroundLoading

  const { id } = useCurrentUser()

  const handleImageHandler = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (type === 'profile') uploadProfile({ id, file })
    if (type === 'background') uploadBackground({ id, file })
  }

  return (
    <motion.label
      className={`bg-card border border-primary-foreground text-primary-foreground flex gap-2 hover:text-secondary hover:bg-primary-foreground rounded-xl flex-row items-center justify-center  px-4 ${style}`}
      initial={{ scale: 0.9, opacity: 0.1 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.1 }}
      role="button"
    >
      {isLoading && <LoaderSmall />}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageHandler}
        className="hidden"
        disabled={isLoading}
      />
      {!isLoading && icon}
      <span className="text-nowrap">{text}</span>
    </motion.label>
  )
}
