import Image from 'next/image'
import Link from 'next/link'
import { css } from '../styled-system/css'
import { Box, Container, VStack, panda } from '../styled-system/jsx'

export default function Page() {
  return (
    <panda.div bg="yellow.300" height="dvh">
      <Container py="20" textAlign="center">
        <VStack>
          <panda.h1 textStyle="panda.h1" fontWeight="bold">
            404
          </panda.h1>
          <panda.h2 textStyle="panda.h2" fontWeight="medium">
            Page Not Found
          </panda.h2>
          <panda.p textStyle="panda.h4">
            Sorry, that page does not exist.{' '}
            <Link
              className={css({
                fontWeight: 'medium',
                textDecoration: 'underline'
              })}
              href="/docs"
            >
              Back to docs
            </Link>
          </panda.p>
          <Box mt="16">
            <Image src="/panda-yoga.svg" alt="" width="300" height="500" />
          </Box>
        </VStack>
      </Container>
    </panda.div>
  )
}
//import { useRouter } from 'next/router'
// import { useConfig } from 'nextra-theme-docs'

// export default function NotFoundPage() {
//   const { route } = useRouter()
//   const config = useConfig()

//   return (
//     <div className="mx-auto flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
//       <h1 className="text-6xl font-bold text-gray-900">404</h1>

//       <div className="mx-auto max-w-xl mt-8">
//         <p className="text-xl text-gray-600 mb-4">
//           Trang này không tồn tại
//         </p>

//         <p className="text-gray-500 mb-8">
//           Đường dẫn {route} không được tìm thấy
//         </p>

//         <a
//           href={config.docsRepositoryBase}
//           className="text-primary-600 hover:text-primary-800 transition-colors"
//         >
//           Về trang chủ →
//         </a>
//       </div>
//     </div>
//   )
// }
