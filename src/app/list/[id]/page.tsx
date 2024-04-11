import { getList } from "@/app/lib/lists";

export default async function Page({ params }: { params: { id: string } }) {
    const list = await getList(params.id);
    console.log(list);
    
    if (list.error){
        return <div>List not found : {list.message} </div>
    }

    if (list.createdByUserId) {
        return (<div> Accès non autorisé</div>)
    } else {
        return <div>My Post: {params.id}</div>
    }

}