from time import time


class Block:
    def __init__(self, index, previous_hash, transactions, proof, timestamp=None):
        self.index = index
        self.previous_hash = previous_hash
        self.transactions = transactions
        self.timestamp = time() if timestamp is None else timestamp
        self.proof = proof
