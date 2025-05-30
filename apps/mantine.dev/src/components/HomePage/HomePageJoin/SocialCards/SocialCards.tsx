import { IconArrowUpRight } from '@tabler/icons-react';
import cx from 'clsx';
import { Box, SimpleGrid, SimpleGridProps } from '@mantine/core';
import { DiscordIcon, GithubIcon } from '@mantinex/dev-icons';
import { MantineLogo } from '@mantinex/mantine-logo';
import { meta } from '@mantinex/mantine-meta';
import classes from './SocialCards.module.css';

function XIcon({ size, style, ...others }: any) {
  return (
    <Box
      component="svg"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      style={[{ width: size, height: size }, style]}
      {...others}
    >
      <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z" />
    </Box>
  );
}

interface CardBaseProps extends React.ComponentPropsWithoutRef<'a'> {
  icon: 'discord' | 'twitter' | 'github' | 'mantine';
  title: string;
  description: string;
  href: string;
}

const icons: Record<CardBaseProps['icon'], React.ReactNode> = {
  discord: <DiscordIcon size={30} className={classes.icon} />,
  twitter: <XIcon size={30} className={classes.icon} />,
  github: <GithubIcon size={30} className={classes.icon} />,
  mantine: (
    <div className={classes.icon}>
      <MantineLogo size={50} type="mark" />
    </div>
  ),
};

export function CardBase({ icon, title, description, className, ...others }: CardBaseProps) {
  return (
    <a className={cx(classes.card, className)} target="_blank" rel="noreferrer" {...others}>
      {icons[icon]}
      <IconArrowUpRight size={20} className={classes.arrow} />
      <div className={classes.body}>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{description}</div>
      </div>
    </a>
  );
}

export function DiscordCard() {
  return (
    <CardBase
      icon="discord"
      className={classes.discord}
      href={meta.discordLink}
      title="Chat on Discord"
      description="Join a community of 10,000+ developers to ask questions, share feedback and explore upcoming features"
    />
  );
}

export function GitHubCard() {
  return (
    <CardBase
      icon="github"
      className={classes.github}
      href={meta.gitHubLinks.discussions}
      title="Start a discussion"
      description="Request new features, ask questions and provide feedback with GitHub discussions"
    />
  );
}

export function HelpCenterCard() {
  return (
    <CardBase
      icon="mantine"
      className={classes.hc}
      href="https://help.mantine.dev"
      title="Help center"
      description="Explore 30+ frequently asked questions"
    />
  );
}

export function TwitterCard() {
  return (
    <CardBase
      icon="twitter"
      className={classes.twitter}
      href={meta.twitterLink}
      title="Follow on X"
      description="Get notified about new minor and major releases"
    />
  );
}

interface SocialCardsProps {
  discord?: boolean;
  github?: boolean;
  twitter?: boolean;
  helpCenter?: boolean;
  cols?: SimpleGridProps['cols'];
}

export function SocialCards({
  discord = true,
  github = true,
  twitter = true,
  helpCenter = true,
  cols = { md: 2 },
}: SocialCardsProps) {
  return (
    <SimpleGrid cols={cols} spacing="lg">
      {discord && <DiscordCard />}
      {github && <GitHubCard />}
      {helpCenter && <HelpCenterCard />}
      {twitter && <TwitterCard />}
    </SimpleGrid>
  );
}
