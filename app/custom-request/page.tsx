"use client"

import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/Navbar"
import { useCustomRequestForm } from "./hooks/useCustomRequestForm"
import {
  HeroSection,
  ImageUploadSection,
  DesignDetailsSection,
  StylePreferencesSection,
  BudgetTimelineSection,
  CTASection
} from "./components"

export default function CustomRequestPage() {
  const {
    formData,
    errors,
    selectedImages,
    selectedStyles,
    handleInputChange,
    handleImageUpload,
    removeImage,
    toggleStyle,
    handleSubmit
  } = useCustomRequestForm()

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      {/* Form Section */}
      <section className="container mx-auto px-4 pb-20 max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-8">
          <ImageUploadSection
            selectedImages={selectedImages}
            onImageUpload={handleImageUpload}
            onRemoveImage={removeImage}
          />

          <DesignDetailsSection
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />

          <StylePreferencesSection
            selectedStyles={selectedStyles}
            onToggleStyle={toggleStyle}
          />

          <BudgetTimelineSection
            formData={formData}
            errors={errors}
            onInputChange={handleInputChange}
          />

          {/* Submit Button */}
          <div className="flex justify-center pt-8 animate-fade-in-up [animation-delay:700ms] opacity-0 [animation-fill-mode:forwards]">
            <Button type="submit" size="lg" className="min-w-[200px]">
              Submit Request
            </Button>
          </div>
        </form>
      </section>

      <CTASection />
    </div>
  )
}
