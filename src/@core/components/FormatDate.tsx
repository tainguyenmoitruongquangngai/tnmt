const FormatDate = ({ time }:any) => {

  function FormatDate(time:any){
    if(time != null){
      const date = new Date(time);
      const day = date.getDate() < 10 ? '0'+date.getDate() : date.getDate();
      const month = date.getMonth() + 1 < 10 ? '0'+(date.getMonth() + 1) : date.getMonth() + 1;
      const year = date.getFullYear();
      
      return <>{day}/{month}/{year}`</>;
      
    }

    return <></>;
  }

  return (
    <>{FormatDate(time)}</>
  );

};

export default FormatDate;
