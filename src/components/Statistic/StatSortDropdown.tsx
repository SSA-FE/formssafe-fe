import dropdownIcon from '@assets/icons/dropdown-icon.svg';

function StatSortDropdown() {
  return (
    <div className="flex items-center justify-between gap-2.5 text-[10px] text-neutral-400">
      <span>A to Z</span>
      <img className="w-[8px] h-[8px]" src={dropdownIcon} alt="dropdown" />
    </div>
  );
}

export default StatSortDropdown;
