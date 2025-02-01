import discord
from config.config import TOKEN

intents = discord.Intents.default()

client = discord.Client(intents=intents)

@client.event
async def on_ready():
    print('login successfully')
    game = discord.Game('Python')
    await client.change_presence(status=discord.Status.online, activity=game)

client.run(TOKEN)
