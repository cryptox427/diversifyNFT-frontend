import Box from "../../components/common/Box";
import Button from "../../components/common/Button";
import Flex from "../../components/common/Flex";

import { useContext, useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../../components/wallet/connectors";
import { formatEther } from '@ethersproject/units'

const Mint = () => {

    const { active, account, library, connector, activate, deactivate } = useWeb3React();

    function connect() {
        activate(injected, async (error) => {
            console.log(error);
        });
      }

    async function disconnect() {
        try {
            deactivate()
        } catch (ex) {
            console.log(ex)
        }
    }

    function Balance() {
        const { account, library, chainId } = useWeb3React()

        const [balance, setBalance] = useState()
        useEffect((): any => {
            if (!!account && !!library) {
                let stale = false

                library
                    .getBalance(account)
                    .then((balance: any) => {
                        if (!stale) {
                            setBalance(balance)
                        }
                    })
                    .catch(() => {
                        if (!stale) {
                            setBalance(undefined)
                        }
                    })

                return () => {
                    stale = true
                    setBalance(undefined)
                }
            }
        }, [account, library, chainId]) // ensures refresh if referential identity of library doesn't change across chainIds

        return (
            <>
                <span>Balance</span>
                <span role="img" aria-label="gold">
        💰
      </span>
                <span>{balance === null ? 'Error' : balance ? `Ξ${formatEther(balance)}` : ''}</span>
            </>
        )
    }

    return (
        <Box cssClasses={["section-pad-top", "bg-dark1"]}>
            <Flex
                cssClasses={["container"]}
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <h1>Mint</h1>
                <p className="mt-1 text-center">
                    Create NFT on our collection
                </p>
                <Box cssClasses={["mt-4", "pt-4"]}>
                    {/* <Button secondary text="Connect Wallet!" /> */}
                        {active ?
                            <Button secondary text={`${account}`} />
                        :
                            <Button secondary text="Connect Wallet !!!!!!" onClick={connect} />
                        }
                </Box>
                <Balance/>
            </Flex>
        </Box>
    );
};

export default Mint;
