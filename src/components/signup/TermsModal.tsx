'use client'
import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

interface TermsModalProps {
  isOpen: boolean
  isAgreed: boolean
  setIsAgreed: React.Dispatch<React.SetStateAction<boolean>>
  onClose: () => void
}

const TermsModal: React.FC<TermsModalProps> = ({ isOpen, isAgreed, onClose, setIsAgreed }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  const handleCloseTermsModal = () => {
    setIsAgreed(false)
    onClose()
  }

  const handleChangeTermsModal = () => {
    setIsAgreed((isAgreed) => !isAgreed)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30"
      onClick={handleClickOutside}
    >
      <div
        ref={modalRef}
        className="m-[4.3rem] h-[58%] w-3/6 justify-center rounded-sm bg-black bg-opacity-80"
      >
        <h2 className="mx-10 my-10 mb-4 text-[2.2rem] font-semibold text-neutral-navy-300">
          이용약관
        </h2>
        <div className="mx-10 my-6 h-[55%] overflow-auto text-[1.2rem] text-neutral-navy-100">
          <p>
            <span className="font-semibold">1. 정의 및 범위</span> <br />
            1.1 이용약관(이하 &apos;약관&apos;)은 3D자산거래 플랫폼 뉴로이드(이하 &apos;서비스
            제공자&apos;)와 이를 이용하는 개인 또는 단체(이하 &apos;사용자&apos;) 간의 권리, 의무,
            책임 및 기타 필요한 사항을 규정합니다. 서비스 제공자와 사용자는 약관에 동의함으로써
            서비스를 이용할 수 있습니다. 1.2 본 약관은 서비스 제공자의 사전 통지 없이 변경될 수
            있으며, 변경된 약관은 서비스 제공자의 웹사이트 또는 서비스를 통해 공지됩니다. 변경된
            약관은 공지된 시점부터 효력이 발생하며, 사용자는 변경된 약관에 동의하지 않을 경우 서비스
            이용을 중지할 수 있습니다. <br />
            <span className="font-semibold">2.서비스 이용 </span> <br />
            2.1 사용자는 서비스를 이용하기 위해 가입 절차를 완료해야 합니다. 가입 절차는 서비스
            제공자의 지침에 따라 진행되며, 필요한 정보를 정확하게 제공해야 합니다. 2.2 사용자는
            서비스를 상업적인 목적으로 이용할 수 없으며, 타인의 권리를 침해하거나 불법 활동을
            수행해서는 안 됩니다. 2.3 서비스 제공자는 서비스 이용에 관련된 정보를 수집, 저장,
            분석하고, 필요한 경우 해당 정보를 사용자에게 제공할 수 있습니다. 이용자는 서비스
            제공자가 수집한 정보에 대해 동의하는 것으로 간주됩니다. <br />
            <span className="font-semibold">3. 3D자산 </span> <br />
            3.1 서비스 제공자인 뉴로이드는 사용자에게 3D자산 거래 플랫폼을 제공합니다. 이를 통해
            사용자는 뉴로이드에서 제공하는 에셋을 구매하거나 판매할 수 있습니다. 3.2 뉴로이드 에셋은
            뉴로이드에 등록된 개인 또는 단체(이하 &apos;판매자&apos;)가 제작한 자산으로, 사용자는
            이를 구매할 수 있습니다. 3.3 사용자는 에셋 구매 시 판매자가 제시한 정보를 신중하게
            검토해야 합니다. 에셋의 상태, 사용 조건, 저작권 등에 대한 모든 책임은 판매자에게 있으며,
            뉴로이드는 어떠한 책임도 지지 않습니다. 3.4 사용자는 판매자와의 거래 과정에서 발생하는
            분쟁이나 문제에 대해 판매자와 직접 해결하여야 합니다. 뉴로이드는 이를 중재하거나
            보증하지 않습니다. <br />
            <span className="font-semibold"> 4. 지적 재산권</span> <br />
            4.1 뉴로이드에 등록된 모든 자산의 지적 재산권은 해당 자산의 제작자 또는 권리 소유자에게
            있습니다. 사용자는 뉴로이드에서 구매한 자산을 개인적인 목적으로만 사용할 수 있으며,
            상업적인 이용이나 재판매는 금지됩니다. 4.2 사용자는 뉴로이드 서비스를 통해 업로드, 공유,
            게시된 자산의 지적 재산권을 침해해서는 안 됩니다. 권리 소유자의 동의 없이 자산을 복제,
            수정, 배포, 판매, 전시, 공연하는 행위는 불법이며 법적 조치를 초래할 수 있습니다.
          </p>
        </div>
        {/* 이용약관 동의 체크박스 */}
        <div className="flex flex-col justify-center ">
          <div className="flex justify-center">
            <input
              id="termsAgreed"
              aria-describedby="termsAgreed"
              type="checkbox"
              checked={isAgreed}
              onChange={handleChangeTermsModal}
              className="rounded my-[1.1rem] h-7 w-7 border border-neutral-navy-300 bg-bg-3 accent-neutral-navy-850 "
            />
            <label htmlFor="termsAgreed" className="ml-3 py-2 text-[20px] text-neutral-navy-100">
              약관에 동의하시겠습니까?
            </label>
          </div>

          {/* 닫기, 동의 버튼 */}
          <div className="flex justify-center">
            <div className="my-6 flex w-[36%]">
              <button
                type="reset"
                onClick={handleCloseTermsModal}
                className="mx-2 h-[3.1rem] w-full rounded-full bg-none px-5 py-3 text-center text-sm text-neutral-white-50 dark:border dark:border-primary-darkblue-hover"
              >
                Close
              </button>
              <button
                onClick={onClose}
                disabled={!isAgreed}
                className="dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mx-2 h-[3.1rem] w-full rounded-full bg-primary-darkblue-hover px-5 py-3 text-center text-sm text-neutral-white-50 focus:outline-none"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsModal
