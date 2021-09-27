import React, {useState, useEffect} from 'react';

const CurrentDate =() => {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    const date = new (Date as any)().getDate();
    const month = new (Date as any)().getMonth() + 1;
    const year =new (Date as any)().getFullYear();
    setCurrentDate(
        date + '/' + month + '/' + year,
    );
  }, []);

  return (
    <div>
      {currentDate}
    </div>
  );
};
export default CurrentDate;
