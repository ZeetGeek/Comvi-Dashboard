import DialogBody from "@/components/global/dialog/dialog-body";
import DialogHead from "@/components/global/dialog/dialog-head";

function DashboardTwo() {
    return (
        <>
            <div className="container mx-auto h-screen">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <DialogHead>Click me</DialogHead>
                    <DialogBody>
                        <p className="bg-blue-200 p-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Repellat quia possimus tempora magni? Est
                            magni quis dignissimos. Odit obcaecati nihil
                            suscipit officiis omnis sunt hic a ipsa. Maiores
                            velit esse quo atque ab provident, neque sunt
                            ducimus hic recusandae commodi ad, dignissimos,
                            facilis laudantium repellat error. Voluptate
                            veritatis magni inventore possimus consequuntur
                            harum nihil dignissimos autem similique corrupti
                            totam atque laudantium odit voluptatibus cum rem
                            sint, corporis dolores iure animi. Quibusdam
                            voluptate numquam, eveniet laborum cupiditate nulla
                            aspernatur voluptas, sint aut accusamus similique
                            deserunt, maxime dolores obcaecati ad fuga
                            reprehenderit quod iste labore ex quas laboriosam?
                            Esse ipsa sint consequuntur.
                        </p>
                    </DialogBody>
                </div>
            </div>
        </>
    );
}

export default DashboardTwo;
