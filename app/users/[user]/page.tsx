interface paramsProvider {
  user: string
}

export default function Page({ params }: {params: paramsProvider}) {
  return (
    <div>User is: {params.user}</div>
  );
}