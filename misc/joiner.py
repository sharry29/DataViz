import pandas as pd

# shawn = pd.read_csv("shawn.csv")
# # print(sorted(shawn.team_id.unique()))
# mine = pd.read_csv("nba_colors.csv")
# # print(sorted(mine.team_id.unique()))


# joined = shawn.set_index("team_id").join(mine.set_index("team_id"))

# joined.to_csv("avg_elos_with_pos_color.csv")

newer = pd.read_csv("avg_elos_with_pos_color.csv")

def update_vals(row):
    # if row.team_id == "LAC":
    #     row.lat = 32.715738
    #     row.lon = -117.1610838
    #    	print('ding')
    # if row.team_id == "PHI":
    #     row.lat += 0.5
    #     row.lon -= 1
    #    	print('ding')
    # if row.team_id == "NJN" or row.team_id == "BRK":
    #     row.lat += -1
    #     row.lon -= -0.3
    #    	print('ding')
    # if row.team_id == "NYK":
    #     row.lat += 0.7
    #     row.lon -= 0.2
    #    	print('ding')
    if row.team_id == "TOR":
    	row.lon = -1 * row.lon
    return row

newer = newer.apply(update_vals, axis=1)

newer.to_csv("avg_elos_with_pos_color.csv", index=False, columns=["team_id","year_id","fran_id","elo_n","lat","lon","color","num_wins","num_loses","win_loss_ratio"])