import CheetiPaataItem from "../cheeti-paata/cheeti-paata-item.component";

function CheetiPaataList(props) {
  const { cheetiPaataList } = props;
  console.log({ cheetiPaataList });
  return (
    <div className="cheeti-paata-list w-5/6 mx-auto grid gap-4 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
      {cheetiPaataList &&
        cheetiPaataList.map((cheeti) => (
          <CheetiPaataItem cheetiPaata={cheeti} key={cheeti.cheetiId} />
        ))}
    </div>
  );
}

export default CheetiPaataList;
