import { Block ,NewBlock} from "./Block"

// 첫번째 블록체인
type Blockchain = {

blocks: Block[];

}
//

export function addBlock(blockchain:Blockchain,data:string){
    //이전블록
    const prevBlock  =  blockchain.blocks[blockchain.blocks.length-1]
    const newBlock = NewBlock(data, prevBlock.hash);
    blockchain.blocks.push(newBlock);
}

function GenesisBlock(): Block{
    return NewBlock("gess","")
}
//초기블록을 통해 블록 체인 생성 기능을 구현한다.

export function createBlockchain () :Blockchain {
    return{
        blocks:[GenesisBlock()],
    }
}