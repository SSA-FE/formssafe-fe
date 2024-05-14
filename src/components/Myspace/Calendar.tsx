import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '@style/custom-datepicker.css';

interface CalendarProps {
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const Calendar = ({ endDate, setEndDate }: CalendarProps) => {
  return (
    <DatePicker
      selected={endDate}
      onChange={(date) => setEndDate(date)}
      minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="YYYY년 MM월 dd일까지"
      className="w-full py-1 rounded text-xs font-bold text-center border outline-none bg-slate-50 text-slate-400 border-slate-200 cursor-pointer focus:border-blue-400"
    />
  );
};

export default Calendar;
