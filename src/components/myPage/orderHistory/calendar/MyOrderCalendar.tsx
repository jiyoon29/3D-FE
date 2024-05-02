'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import s from './MyOrderCalendar.module.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { ko } from 'date-fns/esm/locale' //한국어 설정
import Image from 'next/image'
import { getMonth, getYear } from 'date-fns'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
// type CustomHeaderProps = {
//   date: Date
//   changeYear: (year: number) => void
//   decreaseMonth: () => void
//   increaseMonth: () => void
//   prevMonthButtonDisabled: boolean
//   nextMonthButtonDisabled: boolean
// }
type CustomCalendarProps = {
  setGetStartDate: Dispatch<SetStateAction<string>>
  setGetEndDate: Dispatch<SetStateAction<string>>
}
export default function MyOrderCalendar({ setGetStartDate, setGetEndDate }: CustomCalendarProps) {
  // export default function MyOrderCalendar() {
  const [startDate, setStartDate] = useState<Date | null>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(new Date())

  const YEARS = Array.from(
    { length: getYear(new Date()) + 1 - 2000 },
    (_, i) => getYear(new Date()) - i,
  )
  const MONTHS = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ]

  // react-datePicker Header부분 커스텀 함수
  const customRenderHeader = ({
    date,
    changeYear,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }:ReactDatePickerCustomHeaderProps) => {
    return (
      <div className={s.customHeaderContainer}>
        <button
          type="button"
          onClick={decreaseMonth}
          className={s.monthButton}
          disabled={prevMonthButtonDisabled}
        >
          ⟨
        </button>
        <div className={s.title}>
          <select
            value={getYear(date)}
            className={s.year}
            onChange={({ target: { value } }) => changeYear(+value)}
          >
            {YEARS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <span className={s.month}>{MONTHS[getMonth(date)]}</span>
        </div>
        <button
          type="button"
          onClick={increaseMonth}
          className={s.monthButton}
          disabled={nextMonthButtonDisabled}
        >
          ⟩{' '}
        </button>
      </div>
    )
  }

  return (
    <form action="">
      <div className="mb-8 mt-6 flex w-[65%] text-neutral-navy-200">
        <div className="flex rounded-sm border border-gray-600 bg-neutral-navy-950 p-2.5 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
          {/* 조회 시작날짜 캘린더 */}
          <DatePicker
            locale={ko}
            dateFormat="yyyy.MM.dd" // 날짜 형태
            shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
            minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
            maxDate={new Date()} // maxDate 이후 날짜 선택 불가
            selected={startDate}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setStartDate(date)}
            calendarClassName={s.calendar} // 달력 팝업 스타일링
            renderCustomHeader={customRenderHeader}
            dayClassName={(d) =>
              d.getDate() === startDate!.getDate() ? s.selectedDay : s.unselectedDay
            }
            className="border-non h-[2.3rem] bg-neutral-navy-950 pl-2.5 text-[1.6rem] text-neutral-navy-200"
          />
          <Image src="/icons/calendar.svg" alt="calendar icon" width={20} height={20} />
        </div>

        <span className="mx-8 pt-2 text-center text-[1.6rem]">~</span>

        <div className="flex rounded-sm border border-gray-600 bg-neutral-navy-950 p-2.5 placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
          {/* 조회 종료날짜 캘린더 */}
          <DatePicker
            locale={ko}
            dateFormat="yyyy.MM.dd"
            shouldCloseOnSelect
            minDate={new Date('2000-01-01')}
            maxDate={new Date()}
            selected={endDate}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            onChange={(date) => setEndDate(date)}
            calendarClassName={s.calendar} // 달력 팝업 스타일링
            renderCustomHeader={customRenderHeader}
            dayClassName={(d) =>
              d.getDate() === startDate!.getDate() ? s.selectedDay : s.unselectedDay
            }
            className="border-non h-[2.3rem] bg-neutral-navy-950 pl-2.5 text-[1.6rem] text-neutral-navy-200"
          />
          <Image src="/icons/calendar.svg" alt="calendar icon" width={20} height={20} />
        </div>

        <button
          type="submit"
          className="mx-8 mt-1 h-[3.1rem] w-[10rem] rounded-[9999px] border-gray-600 bg-primary-darkblue-hover px-6 py-3 text-center text-sm text-neutral-white-50"
        >
          조회하기
        </button>
      </div>
    </form>
  )
}
