import axios from "axios";

export async function getUserSummary(id: number) {
    let url: string = `https://jsonplaceholder.typicode.com/users/${id}`;
    try {
        let { data } = await axios.get(url)
        return `${data.name} (${data.username}) - ${data.email}`;
    }
    catch(err) {
        throw new Error("User not found");
    }
};

/* async function test()
{
    console.log(await getUserSummary(9));
}

test(); */