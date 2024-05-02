// import { PaymentPayload, OrderResponse } from '@/api/interface/payment'
// import { postPayment } from '@/api/service/payments'

// export function submitPayment(payload: PaymentPayload) {
//   // 결제 요청을 서버로 전송
//   postPayment(payload)
//     .then((response: OrderResponse) => {
//       // 결제 성공 시
//       console.log('결제 성공:', response)
//       // ... 결제 성공 처리 로직 작성 ...
//       window.location.href = '/payment/complete'
//     })
//     .catch((error: any) => {
//       // 결제 실패 시
//       console.error('결제 실패:', error)
//       // ... 결제 실패 처리 로직 작성 ...
//     })
// }
