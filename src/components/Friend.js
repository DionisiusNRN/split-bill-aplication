export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelect = selectedFriend?.id === friend.id;
  return (
    <li className={isSelect ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          Kamu berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} berhutang Rp{Math.abs(friend.balance)} ke kamu
        </p>
      )}
      {friend.balance === 0 && (
        <p>Kamu dan {friend.name} tidak memiliki hutang</p>
      )}
      <button className="button" onClick={() => onSelected(friend)}>
        {isSelect ? "Tutup" : "Pilih"}
      </button>
    </li>
  );
}
