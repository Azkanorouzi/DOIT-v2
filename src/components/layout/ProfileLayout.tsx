import { useTheme } from '@/contexts/ThemeContext'
import ProfileContent from '../Profile/ProfileContent'

export default function ProfileLayout() {
  const { theme } = useTheme()
  return (
    <div className={theme}>
      <ProfileContent />
    </div>
  )
}
