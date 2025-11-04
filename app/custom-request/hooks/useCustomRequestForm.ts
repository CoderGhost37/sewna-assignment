import { useState } from "react"
import { toast } from "sonner"

interface FormData {
  title: string
  description: string
  budget: string
  timeline: string
}

interface FormErrors {
  [key: string]: string
}

export const useCustomRequestForm = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    description: "",
    budget: "",
    timeline: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [selectedStyles, setSelectedStyles] = useState<string[]>([])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))

    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: "" }))
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      )
      setSelectedImages((prev) => [...prev, ...newImages].slice(0, 5))
    }
  }

  const removeImage = (index: number) => {
    setSelectedImages((prev) => prev.filter((_, i) => i !== index))
  }

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style)
        ? prev.filter((s) => s !== style)
        : [...prev, style]
    )
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = "Design title is required"
    } else if (formData.title.trim().length < 5) {
      newErrors.title = "Title must be at least 5 characters long"
    } else if (formData.title.trim().length > 100) {
      newErrors.title = "Title must not exceed 100 characters"
    }

    // Description validation
    if (!formData.description.trim()) {
      newErrors.description = "Description is required"
    } else if (formData.description.trim().length < 20) {
      newErrors.description = "Description must be at least 20 characters long"
    } else if (formData.description.trim().length > 1000) {
      newErrors.description = "Description must not exceed 1000 characters"
    }

    // Budget validation
    if (!formData.budget.trim()) {
      newErrors.budget = "Budget range is required"
    } else if (formData.budget.trim().length < 3) {
      newErrors.budget = "Please provide a valid budget range"
    }

    // Timeline validation
    if (!formData.timeline.trim()) {
      newErrors.timeline = "Timeline is required"
    } else if (formData.timeline.trim().length < 3) {
      newErrors.timeline = "Please provide a valid timeline"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const resetForm = () => {
    setFormData({ title: "", description: "", budget: "", timeline: "" })
    setSelectedImages([])
    setSelectedStyles([])
    setErrors({})
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Show success toast
      toast.success("Your custom design request has been submitted! 🎉", {
        description: "Designers will start responding to your request shortly."
      })

      // Reset form after a short delay to ensure toast is visible
      setTimeout(() => {
        resetForm()
        // Scroll to top of page after form reset
        window.scrollTo({ top: 0, behavior: "smooth" })
      }, 300)
    } else {
      toast.error("Please fill in all required fields correctly")
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0]
      document.getElementById(firstErrorField)?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      })
    }
  }

  return {
    formData,
    errors,
    selectedImages,
    selectedStyles,
    handleInputChange,
    handleImageUpload,
    removeImage,
    toggleStyle,
    handleSubmit
  }
}
