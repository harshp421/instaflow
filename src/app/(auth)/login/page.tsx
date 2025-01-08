import LoginForm from "@/components/forms/LoginForm"

type Props = {}

function page({}: Props) {
  return (
    <div className="min-h-screen flex">
    {/* Left side - Image */}
    <div className="hidden lg:block lg:w-3/5 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/originals/8f/8f/b4/8f8fb43ce828a22c91c0b59f55fb91b3.png')",
        }}
      />
    </div>

    <LoginForm/>
  </div>
   
  )
}

export default page