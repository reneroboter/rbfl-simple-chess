class CollisionDetection {
    constructor(board) {
        this.board = board.Board;
    }
    isValid(position) {
        if (!this.board[position[1]][position[0]]) {
            return true;
        }
        return false;
    }

}

module.exports = CollisionDetection
