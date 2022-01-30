const Message = require('discord-lib/Message');
const MessageSender = require('discord-lib/MessageSender.js');
const FantasyCriticApi = require("../api/FantasyCriticApi.js");
const FCDataLayer = require("../api/FCDataLayer.js");

exports.sendLeagueUpdatesToLeagueChannels = async function (guilds, leagueChannels) {

    const yearToCheck = new Date().getFullYear();
    for (const leagueChannel of leagueChannels) {
        const leagueActions = await FantasyCriticApi.getLeagueActions(leagueChannel.leagueId, yearToCheck);
        console.log(leagueActions);
    }


    // masterGameYearApiData.forEach(gameToCheck => {


    // const masterGameCache = await FCDataLayer.getMasterGameList(yearToCheck);

    // let gamesToUpdate = [];
    // let updatesToAnnounce = [];
    //     const gameInCache = masterGameCache.find(g => g.masterGameID === gameToCheck.masterGameID);
    //     if (!gameInCache) {
    //         gamesToUpdate.push(gameToCheck);
    //         updatesToAnnounce.push(`New Game Added: **${gameToCheck.gameName}**`);
    //     }
    //     else {
    //         if (gameToCheck.gameName !== gameInCache.gameName) {
    //             gamesToUpdate.push(gameToCheck);
    //             updatesToAnnounce.push(`Game Name Change: **${gameInCache.gameName}** renamed to **${gameToCheck.gameName}**`);
    //         }
    //         if (gameToCheck.estimatedReleaseDate !== gameInCache.estimatedReleaseDate) {
    //             gamesToUpdate.push(gameToCheck);
    //             updatesToAnnounce.push(`Estimated Release Date Change: **${gameToCheck.gameName}** estimated release date changed from **${gameInCache.estimatedReleaseDate}** to **${gameToCheck.estimatedReleaseDate}**`);
    //         }
    //         if (gameToCheck.releaseDate !== gameInCache.releaseDate) {
    //             gamesToUpdate.push(gameToCheck);
    //             updatesToAnnounce.push(`Release Date Change: **${gameToCheck.gameName}** release date changed from **${gameInCache.releaseDate}** to **${gameToCheck.releaseDate}**`);
    //         }
    //         if (gameToCheck.isReleased !== gameInCache.isReleased) {
    //             gamesToUpdate.push(gameToCheck);
    //             if (gameToCheck.isReleased) {
    //                 updatesToAnnounce.push(`**${gameToCheck.gameName}** has released!`);
    //             }
    //             else {
    //                 updatesToAnnounce.push(`**${gameToCheck.gameName}**'s status has changed to "not released" for some reason, check on this.`);
    //             }
    //         }
    //         if (gameToCheck.willRelease !== gameInCache.willRelease) {
    //             gamesToUpdate.push(gameToCheck);
    //             if (gameToCheck.willRelease) {
    //                 updatesToAnnounce.push(`**${gameToCheck.gameName}** will release this year!`);
    //             }
    //             else {
    //                 updatesToAnnounce.push(`**${gameToCheck.gameName}** will NOT release this year.`);
    //             }
    //         }
    //         if (gameToCheck.criticScore !== gameInCache.criticScore) {
    //             gamesToUpdate.push(gameToCheck);
    //             if (!gameInCache.criticScore) {
    //                 updatesToAnnounce.push(`**${gameToCheck.gameName}** now has a critic score of ${gameToCheck.criticScore}.`);
    //             }
    //             else {
    //                 const scoreDiff = gameInCache.criticScore - gameToCheck.criticScore;
    //                 const direction = scoreDiff < 0 ? "UP" : "DOWN";
    //                 updatesToAnnounce.push(`Critic Score Change: **${gameToCheck.gameName}**'s critic score has gone **${direction}** from **${gameInCache.criticScore}** to **${gameToCheck.criticScore}**`);
    //             }
    //         }
    //     }
    // });

    // await FCDataLayer.updateMasterGameList(gamesToUpdate);

    // const messageSender = new MessageSender();

    // const guildsToSend = guilds.filter(g => leagueChannels.map(l => l.guildId).includes(g.id));

    // //console.log(guildsToSend);
    // console.log("made it here")

    // leagueChannels.forEach(leagueChannel => {
    //     console.log("1", leagueChannel);
    //     const guildToSend = guildsToSend.find(g => g.id === leagueChannel.guildId);
    //     if (!guildToSend) {
    //         console.log(`Could not find guild with id ${leagueChannel.guildId}`)
    //         return;
    //     }
    //     console.log("2", guildToSend.name, leagueChannel.channelId);
    //     const channelToSend = guildToSend.channels.find(c => c.id === leagueChannel.channelId);
    //     console.log("2.5");
    //     if (!channelToSend) {
    //         console.log(`Could not find channel with id ${leagueChannel.channelId}`);
    //         return;
    //     }

    //     console.log("3", channelToSend.name);
    //     if (updatesToAnnounce.length > 50) {
    //         console.log(updatesToAnnounce);
    //         const messageToSend = new Message(
    //             "Too many updates to send. Log has been created, please check it.",
    //             null
    //         );
    //         messageSender.sendMessage(messageToSend.buildMessage(), channelToSend, null);
    //     }
    //     else if (updatesToAnnounce.length > 0) {
    //         console.log("updates to announce");
    //         console.log(updatesToAnnounce);
    //         let message = `**Updates!**\n`;
    //         updatesToAnnounce.forEach(updateMessage => {
    //             message += `${updateMessage}\n`;
    //         });
    //         const messageToSend = new Message(
    //             message,
    //             null
    //         );
    //         messageSender.sendMessage(messageToSend.buildMessage(), channelToSend, null);
    //     }
    //     else {
    //         console.log("No updates to announce.", new Date());
    //     }
    // });
}