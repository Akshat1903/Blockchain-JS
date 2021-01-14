const Blockchain = require('./index');
const Block = require('./block');

describe('Blockchain', () => {
    const blockchain = new Blockchain();

    it('coantin a chain array instance', () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });
    it('starts with the genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });
    it('adds a new block to the chain', () => {
        const newData = 'foo bar';
        blockchain.addBlock({ data: newData });
        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
    });
});