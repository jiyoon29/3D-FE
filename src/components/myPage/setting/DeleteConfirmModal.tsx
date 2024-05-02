'use client'
import Link from 'next/link'
import React, { useRef } from 'react'

interface DeleteConfirmModalProps {
  isOpen: boolean
  onClose: () => void
}

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    // 모달 백그라운드
    <div
      className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30"
      onClick={handleClickOutside}
    >
      {/* 모달 */}
      <div
        ref={modalRef}
        className="rounded-xl m-[4.3rem] h-[25%] w-[28%] justify-center bg-black px-12"
      >
        <form className="h-full w-full" action="">
          <div className="my-4 flex h-[30%] flex-col justify-center">
            <h4 className="mb-[6px] flex justify-center text-[1.2rem] text-neutral-navy-100 dark:text-neutral-navy-100">
              회원 탈퇴가 완료되었습니다.
            </h4>
          </div>

          {/* 닫기 버튼 */}
          <div className="flex justify-center">
            <div className="my-8 flex w-[36%]">
              <Link href="/">
                <button
                  type="submit"
                  onClick={onClose}
                  className="dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-full mx-2 h-[3.1rem] w-full bg-primary-darkblue-hover px-5 py-3 text-center text-sm text-neutral-white-50 focus:outline-none"
                >
                  닫기
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default DeleteConfirmModal
