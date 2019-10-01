/*Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input:
11110
11010
11000
00000

Output: 1
Example 2:

Input:
11000
11000
00100
00011

Output: 3
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0; 
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++
                dfs(grid, i , j) 
            }
        }
    }
    return count;
};


function dfs(grid, row, column){
    //boundaries
    if(row < 0 || row >= grid.length || column < 0 || column >= grid[0].length) {
        return false;
    }
    
    const value = grid[row][column]
    if(value === '1'){
        grid[row][column] = '#'; 
        dfs(grid, row + 1, column);
        dfs(grid, row - 1 , column);
        dfs(grid, row, column + 1);
        dfs(grid, row, column -1 );
    }
   
   
}